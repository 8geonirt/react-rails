10.times do |t|
  Item.create!(name: "Item #{t}", description: "Description #{t}") 
end
