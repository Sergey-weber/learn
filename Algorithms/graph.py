# from collections import deque


# graph = {}
# graph["you"] = ["alice", "bob", "claire"]
# graph["bob"] = ["anuj", "peggy"]
# graph["alice"] = ["peggy"]
# graph["claire"] = ["thom", "jonny"]
# graph["anuj"] = []
# graph["peggy"] = []
# graph["thom"] = []
# graph["jonny"] = []

# search_queue = deque()
# search_queue += graph["you"]

# while search_queue:
#   person = search_queue.popleft()

#   if person_is_seller(person):
#     print(person + "is a mango seller!")
    
#     return True
#   else:
#     search_queue += graph[person]
# return False



# def person_is_seller(name):
#   return name[-1] == 'm'


# algorithm dijkstra
graph = {}
graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2

graph['a'] = {}
graph['a']['fin'] = 1
graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5
graph['fin'] = {}

infinity = float('inf')
consts = {}
consts['a'] = 6
consts['b'] = 2
consts['fin'] = infinity

parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['in'] = None

processed = []
