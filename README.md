# mastering_vim_quickly

## Do you speak VIM?
* `help motion.txt`

## The "dot" command
example: You want to append `;` to all three lines.
you could run a command like
`A;<ESC>j`

```
my $i
my $learn
my $quickly
```

then press `. (dot)` to repeat the change in next line

```
my $i;
my $learn;
my $quickly;
```

```
MY $i;
MY $learn;
MY $quickly;
```
ref: `:help change.txt`

## Substitution

* Replace only the whole word
    - for example wanna Substitue word `is` with `was` from the sentence below:

        `This sentence is short.`
    - Yay just use `:s/is/was/g` simple, right? But look at what we get:
        
        `Thws sentence was short.`
    - Something's wrong only whole word should be matched. Here's how to correct
      command would look:

        `:s/\<is\>\was\g`
    - Now the result will be correct:
    
        `This sentence was short.`

* Replace either string1 or string2 with a new word

    `That pretty girl did good on test.`

    - Running the following command:
        `:s/\(pretty\|good\)/awesome/g `

    - You should get a result like:
        `That awesome girl did awesome on test.`
