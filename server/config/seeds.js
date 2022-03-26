const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    //0
    { name: 'Aquatic Creatures' },
    //1
    { name: 'Semi-Aquatic Creatures' },
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
    //Starts Aquatic Creatures
    {
      name: 'Manipogo',
      category: categories[0]._id,
      description:
        'It is described as "A long muddy-brown body with humps that show above the water, and a sheep-like head" and is normally 13-49ft long',
      image: 'manipogo.jpg',
      price: 7999.99,
      quantity: 1
    },
    {
      name: 'Killer Oklahoma Octopus ',
      category: categories[0]._id,
      description:
        'This freshwater Cephalopod is about the size of a horse and resembles an octopus, with long tentacles and leathery, reddish-brown skin.',
      image: 'killer-oklahoma-octopus.jpg',
      price: 3100.99,
      quantity: 4
    },
    {
      name: 'Loch Ness Monster',
      category: categories[0]._id,
      description:
        'The appearance is that of a large creature with a long neck and one or more humps protruding from the water.',
      image: 'loch-ness-monster.jpg',
      price: 14455.99,
      quantity: 1
    },
    
    //Starts Semi-aquatic Creatures
    {
      name: 'Loveland Frog',
      description:
        'The appearance is that of a large half man and half frog that roughly stands about 4ft tall.',
      image: 'loveland-frog.jpg',
      category: categories[1]._id,
      price: 4226.99,
      quantity: 2
    },
    
    //Start of Sky Creatures
    {
      name: 'Dobhar-chú',
      description:
        'Physical description of the Dobhar-Chú resembles an otter but said to be about five times as large (perhaps 10–15 feet), with white pelt, black ear tips and a black cross on its back. Though, due to the murky waters it is said to reside in, its pelt may be portrayed as darker.',
      image: 'dobhar-1.jpg',
      category: categories[1]._id,
      price: 2521.99,
      quantity: 5
    },
    
    
    //Start of Sky Creatures (Category 2)
    {
      name: 'Jersey Devil',
      category: categories[2]._id,
      description:
        'The appearance is that of a bipedal kangaroo-like or wyvern-like creature with a horse- or goat-like head, leathery bat-like wings, horns, small arms with clawed hands, legs with cloven hooves, and a forked tail. It has been reported to move quickly and is often described as emitting a high-pitched "blood-curdling scream',
      image: 'jersey_devil.jpeg',
      price: 3199.99,
      quantity: 5
    },
    {
      name: 'Mothman',
      category: categories[2]._id,
      description:
        'The appearance is that of a half humanoid and half bird like creature.',
      image: 'mothman.jpg',
      price: 1999.99,
      quantity: 5
    },
    {
      name: 'Thunderbird',
      category: categories[2]._id,
      description:
        'The appearance is that of an enormous bird said to create thunder by flapping its wings, and lightning by flashing its eyes.',
      image: 'Thunderbird.jpg',
      price: 3999.99,
      quantity: 4
    },
    
    //Start of Land Creatures (Category 3)
    {
      name: 'Bigfoot',
      category: categories[3]._id,
      description: 'The appearance is that of a large ape like creature.',
      image: 'bigfoot.jpg',
      price: 110000.99,
      quantity: 2
    },
    {
      name: 'Chupacabra',
      category: categories[3]._id,
      description:
        'The appearance is that of a large dog with a row of spines reaching from the neck to the base of the tail.',
      image: 'chupacabra.jpg',
      price: 2769.99,
      quantity: 5
    },
    
    //Start of Land Creatures
    {
      name: 'Mongolian Death Worm',
      category: categories[3]._id,
      description:
        'The appearance is that of a sausage like creature about two feet long, has no head nor leg and it is so poisonous that merely to touch it means instant death.',
      image: 'mongolian-death-worm.jpg',
      price: 1997.99,
      quantity: 5
    },
    {
      name: 'Yeti',
      category: categories[3]._id,
      description:
        'The appearance is that of a large ape like creature that is covered in white hair and known for having large sharp teeth.',
      image: 'Yeti.jpg',
      price: 1999.99,
      quantity: 10
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Test',
    lastName: 'User',
    email: 'tester@testmail.com',
    password: 'password1234',
    orders: [
      {
        products: [products[3]._id, products[1]._id, products[0]._id]
      }
    ]
  });
  
  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password1234',
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
    password: 'password1234'
  });

  console.log('users seeded');

  process.exit();
});