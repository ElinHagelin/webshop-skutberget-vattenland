import { uploadProduct } from "../utils/ajax";
import testData from "../data/testdata";

testData.map(({ name, description, price, productid, picture }) =>
	uploadProduct(name, description, price, productid, picture)
)

