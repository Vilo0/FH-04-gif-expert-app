import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {
    test('debe de mostrar el componente correctamente', () => {
        const title = 'Un título';
        const url = 'https://localhost';
        const wrapper = shallow( <GifGridItem title={title} url={url} /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el componente correctamente simplificado', () => {
        const props = {
            title: 'Un título',
            url: 'https://localhost'
        };
        const wrapper = shallow( <GifGridItem {...props} /> );
        expect(wrapper).toMatchSnapshot();
    });
})
