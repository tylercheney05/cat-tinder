200.times do
  name = Faker::Creature::Cat.name
  breed = Faker::Creature::Cat.breed
  registry = Faker::Creature::Cat.registry
  avatar = Faker::Avatar.image(slug: name, size: '100x400', format: 'png', set: 'set4')
  Cat.create(name: name, breed: breed, registry: registry, avatar: avatar)
end

puts "200 Cats Seeded"