// Café Menu Board — Module 4 exercise lab
// Name: Brantly Stringer   Student ID: 300389597

// The data. Do not change the field names; you may change the values.
const menu = [
  {
    id: 1,
    name: "Espresso",
    description: "A double shot, pulled short",
    price: 3.25,
    vegetarian: true,
    soldOut: false
  },
  {
    id: 2,
    name: "Maple Latte",
    description: "Espresso, steamed milk and maple syrup",
    price: 5.5,
    vegetarian: true,
    soldOut: false
  },
  {
    id: 3,
    name: "Smoked Salmon Bagel",
    description: "Cream cheese, capers and red onion",
    price: 9.75,
    vegetarian: false,
    soldOut: false
  },
  {
    id: 4,
    name: "Butter Croissant",
    description: "Baked fresh every morning",
    price: 3.95,
    vegetarian: true,
    soldOut: true
  },
  {
    id: 5,
    name: "Turkey Club",
    description: "Roast turkey, bacon and tomato on sourdough",
    price: 11.5,
    vegetarian: false,
    soldOut: false
  }
];

// TODO Task 1: MenuHeader component
const MenuHeader = (props) => {
  return (
    <header>
      <h1>{props.cafeName}</h1>
      <span className="count">Items: {props.itemCount}</span>
    </header>
  )
}
// TODO Task 2: PriceTag and MenuItem components
const PriceTag = (props) => {
  return (
    <span className="price">
      ${props.price.toFixed(2)}
    </span>
  )
}

const MenuItem = (props) => {
  return (
    <div className={props.soldOut 
      ? "menu-item is-sold-out"
      : "menu-item"
    }>
      <div className="item-text">
        <ItemText 
          name={props.name}
          description={props.description}
        />
      </div>
      <span>
        {props.soldOut
        ? <span className="sold-out">SOLD OUT</span>
        : <PriceTag price={props.price}/>
        }
      </span>
    </div>
  )
}
// TODO Task 5: ItemText component (returns a fragment)
const ItemText = (props) => {
  return (
    <>
    <span className="item-name">
      {props.name}
      {props.vegetarian && <span className="badge-veg">VEG</span>}
    </span>
    <span className="item-desc">{props.description}</span>
    </>
  )
}

// TODO Task 5: Footer component
const Footer = (props) => {
  return(
    <footer>
      {props.availibilty} of {props.itemCount} items available today
    </footer>
  )
}

// TODO Task 1 / 3: App component
const App = (props) => {
  // Compute the number of items available
  const ITEMS_AVAILABLE=props.items.filter(item => !item.soldOut).length
  return (
    <div className="menu">
      <MenuHeader 
        cafeName="Brant's Cafe"
        itemCount={props.items.length}
      />

      {props.items.map(item => 
        <MenuItem key={item.id}
          id={item.id} 
          name={item.name}
          description={item.description}
          price={item.price}
          vegetarian={item.vegetarian}
          soldOut={item.soldOut}
        />
      )}

      <Footer 
        availibilty={ITEMS_AVAILABLE}
        itemCount={props.items.length}  
      />
      {/* <MenuItem 
        id={1}
        name="Espresso"
        description="A double shot, pulled short"
        price={3.25}
        vegetarian={true}
        soldOut={false}
      />
      <MenuItem 
        id={2}
        name="Maple Latte"
        description="Espresso, steamed milk and maple syrup"
        price={5.5}
        vegetarian={true}
        soldOut={false}
      /> */}
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// TODO Task 1: render <App /> here, passing the menu array as a prop
root.render(<App items={menu} />);