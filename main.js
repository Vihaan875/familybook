var images=["https://st.depositphotos.com/1724125/2693/v/950/depositphotos_26930203-stock-illustration-cartoon-dad.jpg","https://i.pinimg.com/736x/f8/a9/dd/f8a9dd5024d6ebed33ae33db724d84e3.jpg","https://pm1.narvii.com/6262/912a8b24a269ae75daf9bb3f62aeea7b794877af_hq.jpg","https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg","https://i.pinimg.com/originals/d5/6c/d2/d56cd25436d0d3f56ad2f143750f7455.png","https://toppng.com/uploads/preview/mcm-every-day-my-animated-crush-boss-baby-brother-name-11562891858biamraf2zd.png","https://i.pinimg.com/originals/b4/a3/a6/b4a3a64c1689ad676a32387bed96fb62.jpg"];
var Name=["Family book","SIDDHARTH","PRAKRATI","VRITI","SUNITA","SURESH","RAHUL","VIHAAN"];
var i=0;
function update()
{
i++;
var no_of_family_array=8;
if(i>no_of_family_array){
 i=0;   
}
var updateImage=images[i];
var updateName=Name[i];
document.getElementById("family_member_image").src=updateImage;
document.getElementById("family_member_name").innerHTML=updateName;
}