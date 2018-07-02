print("Hello World")

#   LISTAS
fruits = ['Apple', 'Orange', 'Watermelon']
print(fruits[0])
print(fruits[1])
print(fruits[2])
print(fruits[-1])
print(fruits[-2])
print(fruits[-3])

#numbers = [0,1,2,3,4,5,6,7,8,9]
numbers = range(10)
numbers.append(10)
numbers.pop()
print numbers
from_2_to_6 = numbers[2:7]
print from_2_to_6
mayor_que_4 = numbers[5:]
print mayor_que_4
print(numbers[::2])
print(numbers[1::2])
print(4 in numbers)

# DICCIONARIOS
person = {"name":"Nataly", "last_name": "Contreras", "job":"CIDESI"}
print person['name']
print person.get('name', 0)
#   True, False, None ===> true, false, null

def print_fruits(fruits_list):
    for fruit in fruits_list:
        print(fruit)
print_fruits(fruits)

# Duplas - NO SE PUEDE EDITAR EL CONTENIDO
cars = ("Mustang", "Camaro", "Changer", ["1",3], {}, (1,2))
print cars
print cars[1]
print "Mustang" in cars
print len(cars)
