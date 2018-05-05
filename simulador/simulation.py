#!/usr/bin/python
import sys
import math
import random
import matplotlib.pyplot as plt
from matplotlib import style

style.use('fivethirtyeight')

fig = plt.figure()

def expon( mean ):
	aux = math.log( 1- random.random() )*(-mean)
	return aux

def generate():
	xs = []
	ys = []
	res = 0
	k=0
	p=0
	ultimo=50
	j=100

	for i in range(j):
		k = ultimo - (ultimo*.0055) + expon(ultimo*.005)
		# print "el valor actual es: ", k
		xs.append(i)
		ys.append(k)
		ultimo = k;
		p+=k
	# print p
	res=p/j;
	# print "la media es: ", res
	return xs,ys

ax1 = fig.add_subplot(111)
x,y = generate()
ax1.plot(x,y)

plt.show()