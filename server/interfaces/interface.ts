export interface Word {
    id : Number,
    word : String,
    pos : String,
    taken : Boolean 
}

export interface categorizedWords { 
    pos : String,
    words : Array <Word> 
}
