import { shallow } from "enzyme"
import CategoryAdd from "../../components/CategoryAdd";

describe('pruebas en el componente', () => {

    const setCategories = () => {};
    const wrapper = shallow( <CategoryAdd setCategories={setCategories} /> );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });
        
        expect(wrapper.find('p').text().trim()).toBe(value);
        // input.simulate('change', { target: { value: value } });
        // const inputAfter = wrapper.find("input");
        // expect(inputAfter.prop("value")).toBe(value);
    })
    
    
})
