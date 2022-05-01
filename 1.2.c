#include<stdio.h>
int prime(int n){
	int c=0,i;
	for (i=1;i<=n;i++){
		if(n%i==0){
			c++;
		}
	}
		if(c==2){
			return 1;
		}
		else{
			return 0;
		}
}
int main(){
	int n,p;
	printf("enter the number: ");
	scanf("%d",&n);
		p=prime(n);
		if(p==1){
			printf("%d is prime ",n);
		}
		else{
			printf("%d is not prime",n);
		}
		return 0;
}
