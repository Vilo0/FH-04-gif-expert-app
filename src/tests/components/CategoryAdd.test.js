import { shallow } from "enzyme"
import CategoryAdd from "../../components/CategoryAdd";

describe('pruebas en el componente', () => {

    const setCategories = () => {};

    test('debe de mostrarse correctamente', () => {
        const wrapper = shallow( <CategoryAdd setCategories={setCategories} /> );
        expect(wrapper).toMatchSnapshot();
    })
    
})
