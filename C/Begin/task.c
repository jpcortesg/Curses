#include<stdio.h>
#include<math.h>
int main(void)
{
 int radius, pi=22/7;
double volume;
 printf("Enter radius:");
 scanf("%d", &radius);
volume=(4*pi*radius*radius*radius)/3;
printf("volume is : %lf \n\n",&volume);
return 0;
}
