- reactive() only takes objects, NOT JS primitives (String, Boolean, Number, BigInt, Symbol, null, undefined)
- ref() is calling reactive() behind the scenes
- Since reactive() works for objects and ref() calls reactive(), objects work for both
- BUT, ref() has a .value property for reassigning, reactive() does not have this and therefore CANNOT be reassigned


--------------------------ref() Use-Case------------------------------

You'll always use ref() for primitives, but ref() is good for objects that need to be reassigned, like an array.

setup() {
    const blogPosts = ref([]);
    return { blogPosts };
}
getBlogPosts() {
    this.blogPosts.value = await fetchBlogPosts();
}

--------------------------------------------------------
setup() {
    const blog = reactive({ posts: [] });
    return { blog };
}
getBlogPosts() {
    this.blog.posts = await fetchBlogPosts();
}




---------------------------reactive() Use-Case------------------------------

A good use-case for reactive() is a group of primitives that belong together:

const person = reactive({
  name: 'Albert',
  age: 30,
  isNinja: true,
});

the code above feels more logical than

const name = ref('Albert');
const age = ref(30);
const isNinja = ref(true);

//---------------------------------------------------------------
// The callback is called whenever `refA` changes.
watch(refA, () => {
  console.log(refA.value);
  console.log(refB.value);
});

// The callback is called immediately, and
// whenever `refA` or `refB` changes ...
watchEffect(() => {
  console.log(refA.value);
  console.log(refB.value);
});

// ... this is the same behavior as for `computed()`.
const aPlusB = computed(() => {
  console.log(refA.value);
  console.log(refB.value);
  return refA.value + refB.value;
});