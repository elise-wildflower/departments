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
    i1 = d1.items.create(
      name: Faker::Game.platform,
      sale: rand(2).even?)
    3.times do
      i1.comments.create(
        title: Faker::Emotion.adjective,
        body: Faker::Quote.matz
      )
    end
  end
end



  ## 
  #   3.times do
  #     Comment.create(
  #       title: Faker::Verb.simple_present,
  #       body: Faker::ChuckNorris.fact)
  #   end
  # end

# require "faker"
# Department.destroy_all
# Item.destroy_all



# programming = Department.create(name: "Programming")
# bob_ross = Department.create(name: "Bob Ross")
# music = Department.create(name: "Music")

# programming.items.create(name:"Javascript", body:'Js is the language od the web and totes my faves')
# programming.items.create(name:"Ruby", body:'Ruby is the language of the rails')

# Item.create(name:'all about happy trees', body:"bob roos likes to paint trees", Department_id:bob_ross.id)
# Item.create(name:'all about happy Mountains', body:"bob ross likes to paint Mountains", Department_id:bob_ross.id)

# music.items.create(name:'80s synth', body:'totes mcgee my friend')
# music.items.create(name:'90s synth', body:'does this exist?')
