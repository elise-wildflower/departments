# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"
Department.destroy_all
Item.destroy_all
# Comment.destroy_all

4.times do
  d1 = Department.create(
    name: Faker::Company.name, 
    manager: Faker::Name.name, 
    num_employees: Faker::Number.number(digits: 2) )
  5.times do
    d1.items.create(
      name: Faker::Game.platform,
      sale: false)
  end
  #   3.times do
  #     Comment.create(
  #       title: Faker::Verb.simple_present,
  #       body: Faker::ChuckNorris.fact)
  #   end
  # end
end

