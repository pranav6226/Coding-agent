"""
string_utils.py

This module provides utility functions for string operations including reversing a string,
checking if a string is a palindrome, and counting vowels and consonants.

Functions:
- reverse_string(s: str) -> str
- is_palindrome(s: str) -> bool
- count_vowels_and_consonants(s: str) -> tuple[int, int]
"""

from typing import Tuple


def reverse_string(s: str) -> str:
    """
    Reverse the input string.

    Args:
        s (str): Input string to reverse.

    Returns:
        str: Reversed string.

    Raises:
        TypeError: If input is not a string.
    """
    if not isinstance(s, str):
        raise TypeError("Input must be a string")
    return s[::-1]


def is_palindrome(s: str) -> bool:
    """
    Check if the input string is a palindrome.

    Args:
        s (str): Input string to check.

    Returns:
        bool: True if the string is a palindrome, False otherwise.

    Raises:
        TypeError: If input is not a string.
    """
    if not isinstance(s, str):
        raise TypeError("Input must be a string")
    normalized = s.lower()
    return normalized == normalized[::-1]


def count_vowels_and_consonants(s: str) -> Tuple[int, int]:
    """
    Count the number of vowels and consonants in the input string.

    Args:
        s (str): Input string to analyze.

    Returns:
        tuple[int, int]: A tuple containing the count of vowels and consonants respectively.

    Raises:
        TypeError: If input is not a string.
    """
    if not isinstance(s, str):
        raise TypeError("Input must be a string")

    vowels = set("aeiouAEIOU")
    v_count = 0
    c_count = 0

    for char in s:
        if char.isalpha():
            if char in vowels:
                v_count += 1
            else:
                c_count += 1
    return v_count, c_count

