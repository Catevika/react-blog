import axios from "axios";

export default axios.create({
	// Should be changed in production mode!
	baseURL: "http://localhost:3500"
});
