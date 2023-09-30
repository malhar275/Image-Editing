class node{
    constructor(data){
        this.data=data
        this.next=null
        this.pre=null
    }
}
class linkedList{
    constructor(){
        // points to head node
        this.head=null
        //points to current node
        this.current=null
    }
    insert(data){
        let newNode=new node(data) //create a new node
        if(this.head === null){ // if list is empty
            this.head=newNode
            this.current=newNode
        }
        // appends newNode at  temp.next is null
        else{
            let temp=this.head;
            while(temp.next !== null){
                temp=temp.next
            }
            temp.next=newNode
            newNode.pre=temp
            this.current=newNode
        }

    }
    undoEdit=()=>{
        const preData = this.current.pre // checks if previous data id there or not
        if(preData){
            this.current=preData // updates current node to preData and then retur data stored in preData
            return preData.data
        }
        else{
            return null;
        }
    }
    redoEdit=()=>{
        const nextData = this.current.next
        if(nextData){
            this.current=nextData
            return nextData.data
        }
        else{
            return null;
        }
    }
}
const storeData=new linkedList() // new instance of linkedList
export default storeData;