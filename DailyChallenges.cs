// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts year, month and day as integers and returns true if it's Christmas Eve (December 24th) and false otherwise.
public class Program
{
  public static bool TimeForMilkAndCookies(int year, int month, int day)
  {
    return (month == 12 && day == 24);
  }
}

// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
public class Program
{
  public static bool dividesEvenly(int a, int b)
  {
    if (a % b == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}

// Create a function that takes an array and a string as arguments and return the index of the string.
public class Program
{
  public static int FindIndex(string[] arr, string str)
  {
    int ind = 0;
    for (int i = 0; i < arr.Length; i++)
    {
      if (str == arr[i])
      {
        ind = i;
        break;
      }
    }
    return ind;
  }

}

// Create a function that reverses a boolean value.
public class Program
{
  public static bool Reverse(bool boolean)
  {
    return !boolean;
  }
}

// Create a function that takes a single string as argument and returns an ordered array containing the indices of all capital letters in the string.
public class Program
{
  public static int[] IndexOfCapitals(string str)
  {
    return str.Where(x => char.IsLetter(x) && x == char.ToUpper(x))
      .Select(x => str.IndexOf(x)).ToArray();
  }
}