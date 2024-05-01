# CarbonFoodprint

This repo contains the frontend for the CarbonFoodprint application. This application was inspired by me FYP project where I built a personal carbon footprint application.
I realised then that it would be nice to build a system where users can enter the food that they ate on a particular day and find its carbon footprint.

## Built using

The platform is built using:

- Vite and React
- Node.js backend (not in this repo)

## Current status

The platform supports users entering the name of the food, e.g Fried Chicken or a Big Mac, and returns the following:
- Full name of the food
- Image of the food (if available)
- Carbon Footprint of the food
- Reference to the footprint (if available)

![Single Food Item returned](/screenshots/singlefooditem_v1.1.png?raw=true "Single Food Item returned")

If users enter generic terms, the platform can also return an array of food items, like this screenshot below:

![Multiple Food Item returned](/screenshots/multiplefooditem_v1.1.png?raw=true "Multiple Food Item returned")

If food item/name is not found in the database, it will simply return "No item found in database". 


### Note
- Please do note that there are millions of food items around the world. The items in the database will be updated regurarly but we cant guarantee that all the food items will be available.
- The footprint values and references may change over time. This is done to ensure that we can have as accurate data as possible. Do use the references for further info.
- Some values are calculated by summing up the footprint of the ingredients * weight of the ingredients in an average recipe for the item. There will be no reference for these items.
- Images for the items are sourced from google. They are not my images and I dont hold any rights over the images. 
