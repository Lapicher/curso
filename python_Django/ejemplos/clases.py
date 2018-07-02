# -*- coding: utf-8 -*-
class Person:
    age = 0

class Autor(Person):
    name = ""
    last_name = ""

    def __init__(self, name):
        self.name = name

    def getFullName(self):
        return self.name + " "+ self.last_name

    def getAge(self):
        return self.age

    @staticmethod
    def estatico():
        return "Esto es un método estatico"

    def __privado(self, cadena):
        return "Hola todos, {0} devuelto desde metodo privado".format(cadena)

    def print_priv(self, var):
        return self.__privado(var)

    def lanzar_exception(self, param):
        if param == "Lanzar":
            raise Exception("se lanzo una excepcion")

autor = Autor("Nataly")
autor.last_name = "Contreras"
autor.age = 28
print autor.print_priv("''gatito'")
#autor.name = "Nombre"
#autor.last_name = "Apellido"
print autor.name
print autor.getFullName()
print "La edad es: "+str(autor.age)
print Autor.estatico()
autor.lanzar_exception("otra")
