# MB-36 SATCOM protocol

The `/old` sting has two deliberately separate session paths. A kiosk session is
only a browser whose hostname is `localhost` or `127.0.0.1`. Every public
hostname receives the intercepted opening feed and then the join QR; public
sessions never render the terminal, filesystem, receiver, or operator controls.

## Receiver gate

The deeper transmission requires a physical ESP-32 over Chromium Web Serial at
`115200` baud. There is no keyboard simulation, manual override, or fallback
path. If Web Serial is unavailable, the receiver remains locked.

The firmware sends newline-delimited JSON signal frames:

```json
{"type":"signal","frequency":742,"amplitude":63}
```

The lock target is randomized per session: a target frequency between 300 and
1100 kHz and an amplitude threshold between 55% and 75%. Frequency must remain
within ±10 kHz of the session's target and amplitude must clear the session's
threshold for approximately one second. The existing hardware mapping remains
GPIO33 for frequency and GPIO34 for amplitude. Malformed frames are ignored. A
serial failure leaves the experience locked.

## Authored jumps

There is no audio layer; the experience is silent. Carrier shear is tied to
the field-agent failure, relay inversion to the unknown relay response, and the
join QR reveal to a successful receiver lock. `prefers-reduced-motion` removes
the spatial/rapid visual effects.

After a valid lock, the experience opens directly to the join QR. The filesystem
still gains `O:/MB/comms/received/voice-01` if the terminal flow is restored.
The split-key mechanic adds
`O:/MB/comms/received/voice-02` (the other half of the codename) once **both**
key halves are verified; see Fragment frames below. The filesystem is
deterministic and intentionally contains incomplete, contradictory records. It
does not contain puzzle answers, credentials, or live infrastructure.

## Fragment frames

Key material is split across two physical devices and never travels whole:

- **half-1** comes from the receiver ESP-32 over Web Serial. When the carrier is
  held stable (the operator's lock), the firmware emits a `fragment` frame:
  ```json
  {"type":"fragment","half":1,"value":"<half-1>","verified":true}
  ```
  The browser forwards every parsed frame (not just `signal`) to an optional
  `onEvent` callback in `useReceiver`; `useSplitKey` latches half-1 from these.
- **half-2** comes from the decoder ESP-32 (device B) over its WiFi AP at
  `http://192.168.4.1/api/key`:
  ```json
  {"half":2,"value":"<half-2>","verified":<bool>}
  ```
  `half-2` is `verified:true` only after the operator dials the correct channel
  on device B and commits via the touch-Z pad — earning the fragment, not just
  opening a page. The API is served with `Access-Control-Allow-Origin: *` so the
  kiosk browser (cross-origin from the AP) can read it. `useSplitKey` polls this
  endpoint until half-2 is verified.

When both halves are `verified`, the experience resolves the operator key: the
terminal gains a `key` command (revealing the fragments + combined value) and
announces the new record `O:/MB/comms/received/voice-02`. Until then the
terminal behaves exactly as in the single-device path.
