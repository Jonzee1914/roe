const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    //0
    { name: 'All' },
    //1
    { name: 'Sea Creatures' },
    //2
    { name: 'Sky Creatures' },
    //3
    { name: 'Land Creatures' },
    //4
    //{ name: '' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    //Start of Sea Creatures
    {
      name: 'Cadborosaurus',
      description:
        'Cadborosaurus aka Caddy is said by witnesses to resemble a serpent with vertical coils or humps in tandem behind the horse-like head and long neck, with a pair of small elevating front flippers, and either a pair of hind flippers, or a pair of large webbed hind flippers fused to form a large fan-like tail region that provides powerful forward propulsion.',
      image: 'Caddy.jpg',
      category: categories[1]._id,
      price: 8999.99,
      quantity: 2
    },
    {
      name: 'Beast of Busco',
      description:
        'The Beast of Busco (Or affectionately known as Oscar from the first discoverer) resides in Churubusco, Indiana , where it is supposedly a giant snapping turtle. Legend has it that the story starts in 1898, when a farmer named Oscar Fulk supposedly saw a giant turtle living in the seven-acre lake on his farm near Churubusco. He told others about it, but eventually he decided to leave it alone.',
      image: 'Beastofbusco.jpg',
      category: categories[1]._id,
      price: 2999.99,
      quantity: 5
    },
    {
      name: 'Manipogo',
      category: categories[1]._id,
      description:
        'In Canadian folklore, the Manipogo is a lake monster said to live in Lake Manitoba, Manitoba, Canada. The creature was dubbed Manipogo in 1960, the name echoing British Columbia Ogopogo, There is also a Lake Winnipegosis monster called Winnepogo, thought possibly to be the same creature since the lakes are connected. It is the namesake of the Manipogo Provincial Park. The monster is described as being from 4–15 metres (13–49 ft) long.[2] It is described as A long muddy-brown body with humps that show above the water, and a sheep-like head.',
      image: 'Manipogo-copy.jpg',
      price: 7999.99,
      quantity: 1
    },
    {
      name: 'Killer Oklahoma Octopus ',
      category: categories[1]._id,
      description:
        'The Oklahoma octopus is a cryptid generally said to inhabit some freshwater, man-made lakes of Oklahoma, including Lake Thunderbird, Oologah Lake, and Lake Tenkiller, where it attacks and kills unsuspecting swimmers. According to the rumor, this freshwater Cephalopod is about the size of a horse and resembles an octopus, with long tentacles and leathery, reddish-brown skin.',
      image: 'Giant-Octopus.jpg',
      price: 6999.99,
      quantity: 4
    },
    {
      name: 'Loch Ness Monster',
      category: categories[1]._id,
      description:
        'The Loch Ness Monster affectionately known as Nessie, is a creature in Scotland  that is said to inhabit Loch Ness in the Scottish Highlands. It is often described as large, long-necked, and with one or more humps protruding from the water. Popular interest and belief in the creature has varied since it was brought to worldwide attention in 1933. Evidence of its existence is anecdotal, with a number of disputed photographs and sonar readings.The scientific community regards the Loch Ness Monster as a phenomenon without biological basis, explaining sightings as hoaxes, wishful thinking, and the misidentification of mundane objects. The pseudoscience and subculture of cryptozoology has placed particular emphasis on the creature.',
      image: 'LochNessMonster-copy.jpg',
      price: 74999.99,
      quantity: 1
    },
    
    //Start of Sky Creatures (Category 2)
    {
      name: 'Jersey Devil',
      category: categories[2]._id,
      description:
        'The appearance is that of a bipedal kangaroo-like or wyvern-like creature with a horse- or goat-like head, leathery bat-like wings, horns, small arms with clawed hands, legs with cloven hooves, and a forked tail. It has been reported to move quickly and is often described as emitting a high-pitched "blood-curdling scream',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 5
    },
    {
      name: 'Mothman',
      category: categories[2]._id,
      description:
        'The appearance is that of a half humanoid and half bird like creature.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 5
    },
    {
      name: 'Thunderbird',
      category: categories[2]._id,
      description:
        'The appearance is that of an enormous bird said to create thunder by flapping its wings, and lightning by flashing its eyes.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 4
    },
    
    //Start of Land Creatures (Category 3)
    {
      name: 'Bigfoot',
      category: categories[3]._id,
      description: 'The appearance is that of a large ape like creature.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 2
    },
    {
      name: 'Chupacabra',
      category: categories[3]._id,
      description:
        'The appearance is that of a large dog with a row of spines reaching from the neck to the base of the tail.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 5
    },
    {
      name: 'Mongolian Death Worm',
      category: categories[3]._id,
      description:
        'The appearance is that of a sausage like creature about two feet long, has no head nor leg and it is so poisonous that merely to touch it means instant death.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 5
    },
    {
      name: 'Yeti',
      category: categories[3]._id,
      description:
        'The appearance is that of a large ape like creature that is covered in white hair and known for having large sharp teeth.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 10
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
