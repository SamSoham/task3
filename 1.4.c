#include<stdio.h>
void swap(int x,int y){
	int temp;
	temp=x;
	x=y;
	y=temp;
	printf("\nNo. after swapping %d %d",x,y);
}
int main(){
	int a,b;
	printf("Enter the values of a and b\n");
	scanf("%d %d",&a,&b);
	printf("No. before swapping %d %d",a,b);
	swap(a,b);
	return 0;
}
