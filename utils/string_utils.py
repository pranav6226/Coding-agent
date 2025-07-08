"""String utility functions."""

from typing import Tuple


def reverse_string(s: str) -> str:
    """
    Reverse the input string.

    Args:
        s (str): The string to reverse.

    Returns:
        str: The reversed string.

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
        s (str): The string to check.

    Returns:
        bool: True if the string is a palindrome, False otherwise.

    Raises:
        TypeError: If input is not a string.
    """
    if not isinstance(s, str):
        raise TypeError("Input must be a string")
    s_clean = s.lower()
    return s_clean == s_clean[::-1]


def count_vowels_and_consonants(s: str) -> Tuple[int, int]:
    """
    Count the number of vowels and consonants in the input string.

    Args:
        s (str): The string to analyze.

    Returns:
        Tuple[int, int]: A tuple containing the count of vowels and consonants.

    Raises:
        TypeError: If input is not a string.
    """
    if not isinstance(s, str):
        raise TypeError("Input must be a string")
    vowels = set('aeiouAEIOU')
    vowel_count = 0
    consonant_count = 0
    for char in s:
        if char.isalpha():
            if char in vowels:
                vowel_count += 1
            else:
                consonant_count += 1
    return vowel_count, consonant_count
