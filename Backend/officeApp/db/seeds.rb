# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


employees = Employee.create([
    {
        first_name: "galor",
        last_name: "siboni"
    },
    {
        first_name: "maor",
        last_name: "ovadia"
    }
])


items = Item.create([
    {
        name: "Screen"
    },
    {
        name: "charger"
    }
])