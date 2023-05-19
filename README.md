# Prayer Timing & Notes
#### Video Demo:  https://youtu.be/e89WovLJPrY
#### Description:
____
#### __Introduction__

Salah (salat) is the Arabic term for the ritual prayer that is obligatory for Muslims to perform five times a day. It forms one of the five pillars of Islam.
Performing Salah five times daily is compulsory for all Muslims past puberty, which is the age of legal responsibility. It gives us an opportunity to communicate with Allah(God), remember Him, show our gratitude to Him.
The five prayers are:
Fajr, which takes place at pre-dawn
Dhuhr (Dhur, Zhur), which takes place just after the sun reaches its zenith
Asr, which takes place between noon and sunset
Maghrib, which takes place just after sunset
Isha, which takes place during the night/at night-time

So, the timings of prayers differ by regions because of Sun and earth positioning and changes day to day and sometimes we also want to take a quick note of our thoughts. This Webapp fixes these Problem.

#### __What this Webapp do?__
This app Provide the Timings of Islamic Prayer of the day and if we scroll down through the page, we'll find that there is a section of sticky notes where you can type your quick thoughts and notes and whatever you want.
This app can provide prayer timings of almost all cities, you just have to type the name of the city and country and search it.
 _You can double click on the Sticky Note to delete it You would get alert message before deleting it.
Also, when you scroll down color of page changes to yellow and turns back to white and when scroll up._

#### __How this app work and coded?__
This Webapp is code with only simple and classic Html ,Css and Javascript combo. It uses Api to get the timing and uses more javascript code for Sticky notes.
The code for the Api and displaying Api is written purely by me but for the sticky note I copied and merge it for this Webpage to make it more Functionable.
It is made including CSS Grid, Event Listeners, Creating HTML Elements Dynamically and adding to the DOM, and Local Storage.
You can input three entries to manipulate data on this page
"city" (string) -
A city name. Example: London
"country" (string) -
A country name or 2 character alpha ISO 3166 code. Examples: GB or United Kindom
school" (number) -
0 for Shafi (or the standard way), 1 for Hanafi. If you leave this empty, it defaults to Shafii.
__Source for Sticky Notes by decode on youtube__ - https://codepen.io/dcode-software/pen/ExXzdVM
__Endpoints of Prayer Timing Api__ - http://api.aladhan.com/v1/timingsByCity/:date_or_timestamp
__Source of Api__ - https://aladhan.com/prayer-times-api
__Family font I used__ - 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
