import axios from 'axios';
const authorizationKey = "19945506-a6680bfa60c04d980657bbe54";
const fetchImages = (serchQuerry, pageNumber = 1) => {
    return axios.get(`https://pixabay.com/api/?key=19945506-a6680bfa60c04d980657bbe54&q=${serchQuerry}&per_page=12&page=${pageNumber}`)
        .then(({ data }) => data.hits);
}

export default fetchImages;