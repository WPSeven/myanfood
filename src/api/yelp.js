import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer KtNopwN_ZjLh6ZlFtff-4olmT3DuZlLjeS9qoga4n9bU-JPCZfa20ow_EkT4hqwfgtfyzhHP4LIK4WLIqvnKGfAUD9ZNJAZajbfLBfZtrrAxc4R8O6LrEFqiv_lxXnYx'
    }
});