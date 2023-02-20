import { Action, createReducer, on } from '@ngrx/store';
import { getProducts } from '../Action/product.actions';
import { Product } from 'src/app/Models/product';

export interface ProductState{
  product:Product[];
}

export const initialState: Product[] = []

export const productReducer = createReducer(
  initialState,
  on(getProducts,(state) => [...productDataList()])
);


function productDataList(): Product[] {

  const productValue1 =   new Product(9265,
    "83202917-327d-4f46-bc47-f9583557b122",
    "Express Mug",
    "San'ani, Yemen",
    "S288",
    "juicy, velvety, cacao nibs, almond, orange blossom",
    "soft"
  );

  const productValue2 =   new Product(9289,
    "561d460f-405b-46b2-b733-534f7083f506",
    "Green Java",
    "Mount Elgon, Uganda",
    "Blue Mountain",
    "dirty, smooth, blueberry, peach, molasses",
    "bright"
  );
  const productValue3 = new Product(4692,
    "fa998abf-9001-4fca-861e-174da743e4f8",
    "Morning Symphony",
    "Rulindo, Rwanda",
    "S795",
    "delicate, velvety, soy sauce, coconut, hops",
    "mild"
  );
  const productValue4 = new Product(4622,
    "2813ea02-7bde-4cad-9468-9a89772f7c78",
    "Joe Been",
    "Mogiana, Brazil",
    "Pacamara",
    "juicy, silky, magnolia, black pepper, clementine",
    "clean"
  );
  const productValue5 = new Product(5464,
    "0d80652f-07ec-4c39-8ec6-f556035baa26",
    "Good-morning Delight",
    "Mount Elgon, Uganda",
    "Sarchimor",
    "astringent, watery, graham cracker, cream, strawberry",
    "bright"
  );
  const productValue6 = new Product(9944,
    "d721c6f1-2bec-41b1-8943-ea84411d8cdb",
    "Heart Light",
    "Tecapa-Chinameca, El Salvador",
    "Catimors",
    "juicy, slick, magnolia, cacao nibs, nougat",
    "faint"
  );
  const productValue7 = new Product(5699,
    "2d497fe3-55f7-482a-a8a8-c79c95699f38",
    "Red Town",
    "Agalta, Honduras",
    "Colombia",
    "unbalanced, slick, orange creamsicle, fresh bread, mandarin",
    "muted"
  );
  const productValue8 = new Product(8479,
    "5e99bda0-e829-4d1e-90b9-78dcddaca9df",
    "Street Delight",
    "Tecapa-Chinameca, El Salvador",
    "Sumatara",
    "muted, coating, black pepper, banana, ginger",
    "wild"
  );
  const productValue9 = new Product(9409,
    "3419b3c1-21ef-4424-a71a-20d019a02fe4",
    "Blue America",
    "Bugisu, Uganda",
    "Sumatara",
    "mild, smooth, watermelon, kiwi, bakers chocolate",
    "dry"
  );
  const productValue10 = new Product(7291,
    "f041c7e0-fbb8-4e7a-b345-7b1ee6445d23",
    "The Captain's Forrester",
    "Cauca, Colombia",
    "S795",
    "quick, coating, cocoa powder, peanut, grapefruit",
    "vibrant"
  );
  const productValue11 = new Product(8719,
    "85e08fc0-e853-4e36-b7f6-bb06862b39e6",
    "KrebStar Look",
    "Kibale, Uganda",
    "Caturra",
    "faint, chewy, nutella, bergamot, apricot",
    "deep"
  );
  const productValue12 = new Product(5458,
    "4540aa15-d637-4b3b-a83c-eb4ec4111a0a",
    "Morning Breaker",
    "Kigeyo Washing Station, Rwanda",
    "Pacas",
    "faint, full, cherry, black currant, potato defect!",
    "muted"
  );
  const productValue13 = new Product(7627,
    "24cf0253-1e31-46e6-91ba-64ebabee798a",
    "Major Star",
    "Casanare, Colombia",
    "Red Bourbon",
    "dull, syrupy, tobacco, rye, pecan",
    "bright"
  );
  const productValue14 = new Product(4589,
    "98471897-b39c-4079-9654-d5ceebb1ad93",
    "Split Bean",
    "Northern Region, Kilimanjaro, Tanzania",
    "S795",
    "lingering, silky, concord grape, brown sugar, tangerine",
    "structured"
  );
  const productValue15 = new Product(820,
    "577bdecf-6b4c-4841-9b7d-4c5f6d481c3a",
    "Blacktop Cowboy",
    "Kayanza, Burundi",
    "Kona",
    "rounded, round, leathery, cola, almond",
    "faint"
  );
  const productValue16 = new Product(1121,
    "98679c75-2338-444b-ba4d-248e01999a8d",
    "American Nuts",
    "Machakos, Kenya",
    "San Ramon",
    "structured, full, carmel, snow pea, wheat",
    "soft"
  );
  const productValue17 = new Product(1810,
    "221706de-8848-4b1b-b296-de4fd1ac25c2",
    "Morning Pie",
    "Gimbi, Ethiopia",
    "Bourbon",
    "soft, syrupy, lavender, rose hips, cacao nibs",
    "balanced"
  );
  const productValue18 = new Product(9582,
    "310be7d8-d086-446b-ba86-1a66fb35a65b",
    "Winter Nuts",
    "Mount Elgon, Uganda",
    "Typica",
    "crisp, velvety, baggy, coconut, strawberry",
    "sharp"
  );
  const productValue19 = new Product(1296,
    "4a400dd4-2f09-4f50-b715-0a070ddc7c09",
    "Chocolate Cup",
    "Ojimmah, Ethiopia",
    "Catimors",
    "deep, syrupy, lemon verbena, blueberry, cranberry",
    "bright"
  );
  const productValue20 = new Product(3058,
    "25792d0a-0906-480c-8525-6ff1e835f008",
    "Joe Volcano",
    "West Valley, Costa Rica",
    "Villa Sarchi",
    "delicate, chewy, apricot, raspberry, cedar",
    "dry"
  );
  const productValue21 = new Product(3948,
    "f2e19ebe-699d-41c3-8181-120ac00e49c3",
    "Major Town",
    "Raimi, Yemen",
    "Gesha",
    "delicate, smooth, white grape, green apple, medicinal",
    "clean"
  );
  const productValue22 = new Product(5681,
    "acf9eb3f-a6b1-405a-9c40-3055de45bcf8",
    "American Java",
    "Nayarit, Mexico",
    "S288",
    "vibrant, watery, hay, liquorice, figs",
    "crisp"
  );
  const productValue23 = new Product(2720,
    "faf5ecf4-2585-498d-a706-aa2746e0fbaf",
    "Goodbye Level",
    "Hidalgo, Mexico",
    "Catimors",
    "sharp, round, quakery, red apple, tobacco",
    "dull"
  );
  const productValue24 = new Product(264,
    "c41fb58d-a46e-4e44-b37c-b6e99f558b2a",
    "The Captain's Cowboy",
    "Mount Elgon, Uganda",
    "Catimors",
    "bright, slick, prune, soy sauce, sugar cane",
    "juicy"
  );
  const productValue25 = new Product(6187,
    "41fb5c5d-660a-4a2e-8662-915d467658f0",
    "Cascara Pie",
    "Brunca, Costa Rica",
    "Pacamara",
    "lingering, full, prune, papaya, sweet pea",
    "tart"
  );
  const productValue26 = new Product(4500,
    "a4bbb60c-b417-4319-b240-9663d501d10a",
    "Huggy Been",
    "Mogiana, Brazil",
    "Colombia",
    "faint, slick, green grape, concord grape, peanut",
    "dry"
  );
  const productValue27 = new Product(2743,
    "dc922105-10ab-496e-9c33-8069837a6467",
    "Goodbye Cup",
    "Southern Region, Mbinga, Tanzania",
    "Catimors",
    "tart, full, almond, plum, leafy greens",
    "delicate"
  );
  const productValue28 = new Product(7861,
    "31df040c-1f81-49b4-accd-e8ec5c9fa20d",
    "Café Mug",
    "Carazo, Nicaragua",
    "Colombia",
    "unbalanced, chewy, sugar cane, dill, jasmine",
    "tart"
  );
  const productValue29 = new Product(4925,
    "aa964613-20d8-4edd-8659-95244d8b1a31",
    "Captain's Bean",
    "Nakuru, Kenya",
    "Pink Bourbon",
    "juicy, round, wheat, lavender, dates",
    "clean"
  );
  const productValue30 = new Product(9028,
    "ca961b4e-c3d6-4afb-a4c5-1ec9fc513914",
    "Jacked Blend",
    "Coban, Guatemala",
    "Ennarea",
    "sharp, smooth, nectarine, molasses, strawberry",
    "astringent"
  );
  const productValue31 = new Product(4077,
    "df524aee-4355-45c2-be28-14f3764f63de",
    "Express Cup",
    "Cerrado, Brazil",
    "Pacamara",
    "tart, big, banana, jasmine, green apple",
    "rounded"
  );
  const productValue32 = new Product(1832,
    "0b7f469e-dba3-4df0-8b3b-236c06dc0f14",
    "Red Solstice",
    "Wellega, Ethiopia",
    "Kaffa",
    "sharp, coating, medicinal, orange, red currant",
    "vibrant"
  );
  const productValue33 = new Product(6646,
    "e7789c7e-ce40-4187-a1a3-37f1b62746ac",
    "Pumpkin-spice Utopia",
    "Opalca, Honduras",
    "Kona",
    "deep, tea-like, carbon, meyer lemon, meyer lemon",
    "balanced"
  );
  const productValue34 = new Product(7209,
    "e64d13ba-6b89-4f22-975f-e811e888f290",
    "Postmodern Volcano",
    "Coban, Guatemala",
    "Kent",
    "pointed, slick, red apple, lavender, clove",
    "dry"
  );
  const productValue35 = new Product(6442,
    "fe5e9ae7-aeee-4d90-ab8c-38923bdc6465",
    "Captain's Delight",
    "Jalisco, Mexico",
    "Java",
    "complex, creamy, red apple, musty, peach",
    "muted"
  );
  const productValue36 = new Product(96,
    "c2c01335-b8d5-4195-a2b6-2ae80b57717d",
    "Jacked Bean",
    "Meru, Kenya",
    "S795",
    "deep, tea-like, squash, peanut, soil",
    "structured"
  );
  const productValue37 = new Product(9503,
    "f921a026-9a1e-40c2-b5e3-bab865b21339",
    "Heart Coffee",
    "Atitlan, Guatemala",
    "Pink Bourbon",
    "juicy, slick, nutmeg, white pepper, carmel",
    "sharp"
  );
  const productValue38 = new Product(3937,
    "7d3a2aea-637a-4fe0-8aca-50d94105ae5a",
    "Thanksgiving Treat",
    "Opalca, Honduras",
    "Catimors",
    "mild, silky, pineapple, cacao nibs, brown sugar",
    "vibrant"
  );
  const productValue39 = new Product(6179,
    "bc83a91f-374e-4ab9-b2ff-2848f8cfc2a0",
    "Hello America",
    "Kayanza, Burundi",
    "Red Bourbon",
    "quick, silky, cinnamon, kiwi, figs",
    "crisp"
  );
  const productValue40 = new Product(3259,
    "fe9cced5-9c3b-408e-8388-45525048b533",
    "Good-morning Symphony",
    "Comayagua, Honduras",
    "Pink Bourbon",
    "astringent, velvety, cocoa powder, rose hips, black currant",
    "vibrant"
  );
  const productValue41 = new Product(9812,
    "f5cf6a77-43df-4345-861d-bf79791d080b",
    "Huggy Town",
    "Chiriqui, Panama",
    "S795",
    "juicy, juicy, tomato, tangerine, toast",
    "clean"
  );
  const productValue42 = new Product(5168,
    "586b2069-4c87-4a4b-b383-8b755ddb6275",
    "Jacked Treat",
    "Rulindo, Rwanda",
    "S288",
    "astringent, smooth, raisin, concord grape, orange",
    "soft"
  );
  const productValue43 = new Product(9942,
    "b560d48e-cada-4e6a-a17d-dd0c6e387c26",
    "Reg's Level",
    "Western Region, Tarime, Tanzania",
    "Dega",
    "astringent, full, cream, grapefruit, red apple",
    "tart"
  );
  const productValue44 = new Product(9501,
    "f6a990f8-1ef5-4d2a-9597-ff14ea48a6eb",
    "Seattle Mug",
    "Lake Kivu Region, Rwanda",
    "Geisha",
    "astringent, big, tobacco, milk chocolate, lemon",
    "deep"
  );
  const productValue45 = new Product(8642,
    "6a708f74-aca9-42c0-9486-c025b0714c8f",
    "Green Solstice",
    "Antioquia, Colombia",
    "Ethiopian Heirloom",
    "dull, big, green grape, lychee, cherry",
    "dull"
  );
  const productValue46 = new Product(1235,
    "c8a2a2cd-2f16-4abe-b543-dff39db54d91",
    "Hello Symphony",
    "Copan, Honduras",
    "Kona",
    "astringent, slick, red apple, milk chocolate, orange creamsicle",
    "sharp"
  );
  const productValue47 = new Product(2597,
    "0d8d1382-8ffa-4559-ba50-3bd5caae1e11",
    "Hello Star",
    "Bugisu, Uganda",
    "Obata",
    "dirty, juicy, baggy, honeysuckle, almond",
    "bright"
  );
  const productValue48 = new Product(760,
    "8c895c3c-da05-412f-8d64-3c5315b71f46",
    "Bluebery Cake",
    "Ojimmah, Ethiopia",
    "SL34",
    "balanced, syrupy, bergamot, marzipan, hops",
    "vibrant"
  );
  const productValue49 = new Product(2435,
    "7e9ee689-1002-4939-af78-a5eec4808bb6",
    "Good-morning Cup",
    "Wellega, Ethiopia",
    "Villa Sarchi",
    "wild, creamy, grassy, cranberry, blueberry",
    "dull"
  );
  const productValue50 = new Product(7243,
    "5ae33ba4-a565-41bd-a38e-afa7b36e4eb7",
    "Postmodern Enlightenment",
    "Acatenango, Guatemala",
    "Gimma",
    "dense, creamy, cashew, concord grape, passion fruit",
    "dull"
  );

  const products: any = [productValue1,productValue2,productValue3,productValue4,productValue5,productValue6,productValue7,productValue8,productValue9,productValue10,productValue11,productValue12,productValue13,productValue14,productValue15,productValue16,productValue17,productValue18,productValue19,productValue20,productValue21,productValue22,productValue23,productValue24,productValue25,productValue26,productValue27,productValue28,productValue29,productValue30,productValue31,productValue32,productValue33,productValue34,productValue35,productValue36,productValue37,productValue38,productValue39,productValue40,productValue41,productValue42,productValue43,productValue44,productValue45,productValue46,productValue47,productValue48,productValue49,productValue50];
  return products;
}

