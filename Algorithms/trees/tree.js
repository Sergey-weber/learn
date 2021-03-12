// Каждый экземпляр Node содержит 3 свойств:
// data - для хранения данных
// parent - ссылка на родительский узел
// children - ссылка на родительский узел
function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
};

function Tree(data) {
  const node = new Node(data);

  this._root = node;
};

function Queue() {
  this.queue = [];

  this.dequeue = () => {
    return this.queue.shift();
  };

  this.enqueue = (node) => {
    this.queue.push(node);
  }
}

// Обход в глубину
Tree.prototype.DF = function (callback) {
  (function recurse(currentNode) {
    for (let i = 0; i < currentNode.children.length; i++) {
      recurse(currentNode.children[i]);
    };

    callback(currentNode);
  })(this._root);
};

// Обход в ширину
Tree.prototype.BF = function (callback) {
  const queue = new Queue();

  queue.enqueue(this._root);

  currentTree = queue.dequeue();

  while (currentTree) {
    for (let i = 0; i < currentTree.children.length; i++) {
      queue.enqueue(currentTree.children[i]);
    }

    callback(currentTree);

    currentTree = queue.dequeue();
  }
};

// Обход дерева по глубине или ширине, в зависимости от 2 аргумента traversal
Tree.prototype.contains = function (callback, traversal) {
  traversal.call(this, callback);
};

Tree.prototype.add = function (data, toData, traversal) {
  const childNode = new Node(data);
  let parent = null,
    callback = (node) => {
      if (node.data === toData) {
        parent = node;
      }
    };

  this.contains(callback, traversal);

  if (parent) {
    parent.children.push(childNode);
    childNode.parent = parent;
  } else {
    // throw new Error('Cannot node');
  }
};

const tree = new Tree('one');

tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five for two'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six for two'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven for four'));
tree._root.children[2].children[0].parent = tree._root.children[2];


tree.DF(function (node) {
  // console.log(node.data)
});


tree.BF(function (node) {
  // console.log(node.data)
});


tree.add('eight for three', 'three', tree.BF);

tree.contains((node) => {
  // console.log('node: ', node.data);
  if (node.data === 'three') {
    // console.log('eeee three: ', node);
  }
}, tree.BF);

tree.contains((node) => {
  // console.log('node: ', node.data);
  if (node.data === 'two') {
    // console.log('eeee TWO');
  }
}, tree.DF);

// class ClassComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   shouldComponentUpdate(prev, next) {
//     return prev.text.toLowerCase() !== next.text.toLowerCase();
//   }

//   componentDidMount() {
//     console.log('Did mount')
//   }

//   componentWillUnmount() {
//     console.log('Will unmount');
//   }

//   componentDidCatch(error, info) {
//     console.error(error, info);
//   }

//   render() {
//     return (
//       <div>{this.props.text}</div>
//     );
//   }
// }


// const FunctionalComponent = ({ text }) => {
//   const [initialText,]

//   useEffect(() => {
//     console.log('Did mount');

//     return () => {
//       console.log('Will unmount');;
//     }
//   }, [])

//   useEffect(() => {
//     console.log('text');
//   }, [text])

//   return (
//     <div>{text}</div>
//   )
// };

// React.memo(FunctionalComponent, (prevProps, nextProps) => {
//   return prevProps.text.toLowerCase() !== nextProps.props.toLowerCase();
// })

// ReactDOM.render(
//   <React.StrictMode>
//     <ClassComponent text="Hello class component" />
//     <FunctionalComponent text="Hello functional component" />
//   </React.StrictMode>
//   , document.getElementById('root'))


const str = "bar.baz.foo:111222",
  obj = {
    bar: {
      baz: {
        foo: 333444,
        foo2: 674654
      }
    }
  };

function replaceInObj(obj, str) {
  const string = str.split('.');
  const strEnd = string[2].split(':');

  const outPut = {}

  Object.keys(obj).forEach((el) => {
    if (el === string[0]) {
      outPut[el] = {};
      replaceInObj(obj[el])
    } else if (el === strEnd[1]) {

    }
  })
}

console.log(replaceInObj(obj, str));