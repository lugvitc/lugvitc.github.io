import president from '../../images/members/Baleswar.jpeg';
import vp from '../../images/members/blank.png';
const imgStyle = {
    width: '100%',
    height: 'auto'
};
export const membersList = [
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

