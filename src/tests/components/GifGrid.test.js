import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('prueban en el <GifGrid />', () => {
    const category = 'Luffy';

    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    })
    
    test('debe de mostrar item cuand se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'abc',
            title: 'cualquier cosa',
            url: 'https://localhost.jpg',
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();

    })
    
})
