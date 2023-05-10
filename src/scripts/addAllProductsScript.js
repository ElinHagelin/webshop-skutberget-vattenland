import { uploadProduct } from "../utils/ajax.js";
import testData from "../data/testdata.js";

testData.forEach(({ name, description, price, productid, picture }) =>
	uploadProduct(name, description, price, productid, picture)
)

