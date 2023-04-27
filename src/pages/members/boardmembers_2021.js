import president from '../../images/members/Baleswar.jpeg';
import vp from '../../images/members/Samridh.jpeg';
const imgStyle = {
    width: '300px',
    height: '300px',
};
export const boardmembers_2021 = [
    {
        position: 'President',
        member: 'Beleswar Prasad Padhi',
        batch: 'Member since- 2021',
        photo:(
            <>
                <img
                    style={imgStyle}
                    src={president}
                    alt='Club President'
                />
            </>
        )
    },
    {
        position: 'Vice-President',
        member: 'Samridh Anand Paatni',
        batch: 'Member since- 2021',
        photo:(
            <>
                <img
                    style={imgStyle}
                    src={vp}
                    alt='Club Vice-President'
                />
            </>
        )
    }

];

