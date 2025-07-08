"""
Module: math_utils
Provides basic mathematical utility functions.
"""
from typing import Union

Number = Union[int, float]

def add(a: Number, b: Number) -> Number:
    """
    Returns the sum of two numeric inputs.

    Args:
        a (int | float): The first number.
        b (int | float): The second number.

    Returns:
        int | float: The sum of a and b.
    """
    return a + b
