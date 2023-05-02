import president from '../../images/members/Baleswar.jpeg';
import vp from '../../images/members/Samridh.jpeg';
import TechHead from '../../images/members/21BCE5139.jpg';
import TechCoHead from '../../images/members/21BEC1506.jpeg';
import OperationHead from '../../images/members/21BCE1972.png';
import blank from '../../images/members/blank.png';
import { faAlignCenter, faAlignLeft } from '@fortawesome/free-solid-svg-icons';
const imgStyle = {
    width: '300px',
    height: '300px',
};
export const boardmembers_2022 = [
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
    },
    {
        position: 'Technical Head',
        member: 'Abhishek Kumar',
        batch: 'Member since- 2022',
        photo:(
            <>
                <img
                    style={imgStyle}
                    src={TechHead}
                    alt='Club Tech-Head'
                />
            </>
        )
    },
    {
        position: 'Technical Co-Head',
        member: 'Animesh Rai',
        batch: 'Member since- 2022',
        photo:(
            <>
                <img
                    style={imgStyle}
                    src={TechCoHead}
                    alt='Club Tech-Co-Head'
                />
            </>
        )
    },
    {
        position: 'Operation Head',
        member: 'Aditi Rai',
        batch: 'Member since- 2022',
        photo:(
            <>
                <img
                    style={imgStyle}
                    src={OperationHead}
                    alt='Club Tech-Head'
                />
            </>
        )
    },
    {
        position: 'Operation Co-Head',
        member: 'Praveenraj R S',
        batch: 'Member since- 2022',
        photo:(
            <>
                <img
                    style={imgStyle}
                    src={blank}
                    alt='Club Tech-Head'
                />
            </>
        )
    },
    {
        position: 'Management Head',
        member: 'Arumilli Abhiram',
        batch: 'Member since- 2022',
        photo:(
            <>
                <img
                    style={imgStyle}
                    src={blank}
                    alt='Club Tech-Head'
                />
            </>
        )
    },
    {
        position: 'Management Co-Head',
        member: 'Nithin Kumar',
        batch: 'Member since- 2022',
        photo:(
            <>
                <img
                    style={imgStyle}
                    src={blank}
                    alt='Club Tech-Head'
                />
            </>
        )
    },

];

