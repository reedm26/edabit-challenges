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