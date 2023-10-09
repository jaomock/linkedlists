class Node{
    constructor(data, next = null){
    this.data = data;
    this.next = next;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data){
        let node = new Node(data)
        let current;
        if(this.head === null){
            this.head = node
        } else {
            current = this.head

            while(current.next){
                current = current.next
            }

            current.next = node;
        }

        this.size++
    }
        
    prepend(data){
        this.head = new Node(data,this.head);
        this.size++
    }

    sizee(){
        console.log(this.size)
        // let current = this.head
        // let count = 0

        // while(current != null){
        //         count++
        //         current = current.next;
            
        // }
        // return count;
    }

    headd(){
        console.log(this.head)
    }

    tail(){
        let current = this.head

        while(current.next != null){
            current = current.next
            if(current.next === null){
                console.log(current)
            }
        }
    }

    pop(){
        let current = this.head
        let previous;

        while(current.next != null){
                previous = current
                current = current.next
        }
        previous.next = null
        this.size--
    }

    insertAt(data,index){
        let node = new Node(data);
        let current
        let previous
        if(index > this.size || index < 0){
            console.log('Error, index is larger or smaller than size of list')
            return
        } 

        if(index === 0){
           this.prepend(data)
           return
        }

        current = this.head
        let count = 0

        while(count < index){
            previous = current;
            count++
            current = current.next
        }

        node.next = current
        previous.next = node

        this.size++

    }

    getAt(index){
        let current = this.head
        let count = 0

        while(current){
            if(count === index){
                console.log(current.data)
            }
            count++
            current = current.next;
        }
        return null;
    }

    printListData(){
        let current = this.head;

        while(current) {
            console.log(current.data)
            current = current.next
        }
    }



}


const ll = new linkedList();

ll.prepend(300);
ll.prepend(200);
ll.prepend(100);
ll.append(400)
ll.append(6546)
// ll.insertAt(500,4)

// ll.getAt(3)
// ll.sizee()

ll.printListData();

ll.headd()

ll.tail()

ll.pop()

console.log(ll)