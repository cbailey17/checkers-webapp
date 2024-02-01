#! /usr/bin/python3
'''
Modified Jan 31, 2024 - Expanded comments  

@author: abailey
'''

from __future__ import print_function
from board import Board
from copy import copy, deepcopy
import operator


class CheckerBoard(Board):
    '''
    CheckerBoard - Class for representing a checkerboard
    and making legal moves.
    
       Initial board:
       0  1  2  3  4  5  6  7 
    0  .  b  .  b  .  b  .  b 
    1  b  .  b  .  b  .  b  . 
    2  .  b  .  b  .  b  .  b 
    3  .  .  .  .  .  .  .  . 
    4  .  .  .  .  .  .  .  . 
    5  r  .  r  .  r  .  r  . 
    6  .  r  .  r  .  r  .  r 
    7  r  .  r  .  r  .  r  .      
    '''