class Node
  attr_accessor :data, :left, :right
  #data -> int
  #left -> Pointer to left child
  #right -> Pointer to right child.
  def initialize( data =nil)
    @data = data
    left = nil
    right = nil
  end
end

class BST
  attr_accessor :root_node

  def initialize(root_value=nil)
    @root_node = Node.new(root_value)
  end

  def insert(node, data)
    if (node.data <= data)
      insert(node.left, data)
    elsif (node.data > data)
      insert(node.right, data)
    else
      return node = Node.new(data)
    end
  end

  def printInOrder(node)
    if (node.left != nil)
      printInOrder(node.left)
    end
    puts node.data
    if(node.right != nil)
      printInOrder(node.right)
    end
  end

  def preOrderTraversal()
    puts node.data
    if (node.left != nil)
      printInOrder(node.left)
    end
    if(node.right != nil)
      printInOrder(node.right)
    end
  end

  def postOrderTraversal()
    if (node.left != nil)
      printInOrder(node.left)
    end
    if(node.right != nil)
      printInOrder(node.right)
    end
    puts node.data
  end
end

bstRoot = BST.new(5)
bstRoot.insert(bstRoot.root_node,6)
bstRoot.insert(bstRoot.root_node,30)
bstRoot.insert(bstRoot.root_node,40)
bstRoot.insert(bstRoot.root_node,10)
bstRoot.insert(bstRoot.root_node,15)
bstRoot.insert(bstRoot.root_node,60)
