import axios from "axios";

const Newproduct = {
    list : () => {
        return axios.get('newproduct');
    }
}

export default Newproduct;