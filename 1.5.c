#include<stdio.h>
int main(){
	int n ;
	int ar[100];
	printf("enter the number of elements (1 to 100): ");
	scanf("%d",&n);
	int i;
	for (i=0;i<n;++i){
	printf("Enter the number %d: ",i+1);
	scanf("%d",&ar[i]);	
	}
	for ( i=1;i<n;++i){
		if(ar[0]<ar[i]){
			ar[0]=ar[i];
		}
	}
	printf("Largest element = %d",ar[0]);
	return 0;
}
