import { shallow } from "enzyme"
import CategoryAdd from "../../components/CategoryAdd";

describe('pruebas en el componente', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <CategoryAdd setCategories={setCategories} /> );

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <CategoryAdd setCategories={setCategories} /> );
    })

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

    test('no debe de postear la información onSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategoriesy limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Edgard';

        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
})
