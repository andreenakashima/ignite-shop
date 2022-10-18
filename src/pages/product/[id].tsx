import { useRouter } from "next/router";
import {
	ImageContainer,
	ProductContainer,
	ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
	const { query } = useRouter();
	return (
		<ProductContainer>
			<ImageContainer></ImageContainer>

			<ProductDetails>
				<h1>Camiseta X</h1>
				<span>R$ 79,90</span>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea
					non, est dolor eos saepe omnis, ratione consequatur dolores itaque
					voluptate corrupti alias, quod atque animi excepturi ducimus quibusdam
					modi!
				</p>

				<button>Comprar agora</button>
			</ProductDetails>
		</ProductContainer>
	);
}
