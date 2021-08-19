# Notating with LilyPond

_LilyPond is an open source technology for notating music in plain text files. In this course, we'll cover the fundamentals of music notation in LilyPond._

![](undefined)

**Tags**: none

---

# Welcome to Notating with LilyPond!

LilyPond is an open source music notation technology. With LilyPond, music can be notated in non-binary files with numbers and symbols, just like code.

In this course, we're going to practice some of the fundamental ways to notate music with LilyPond, like:

- Pitches
- Rhythms
- Time signature
- Key signature
- Accidentals
- Dynamic markings

Before you start this course, you may want to be familiar with a few concepts, like melody and rhythm notation in traditional western music. This course is _not_ about how music is notated - it's about how to notate music with LilyPond.

### Notating pitch with LilyPond

LilyPond uses the alphabetical note names to determine pitch. In this pull request, we see:

```ly
  c8\mf c g' b
  a a <g d>4
  f4 f e e
  d d c2
```

Some of these letters, numbers, and symbols represent things related to the notes, and some represent pitches. The letters that represent pitches are:

```ly
  c c g b
  a a <g d>
  f f e e
  d d c
```

We'll talk about some of the other symbols later on.

### Our project right now

We have created a version of the song in its current form, and [you can listen to it here](https://gitmusical.github.io/notating-twinkle/0-default).

Right now, the compiled piece would look like this:

![twinkle twinkle initial version](https://gitmusical.github.io/notating-twinkle/0-default.png)

You can also see and play the file on [LilyBin](http://lilybin.com/3ojky1/1).

## Step 1: Fix a note

This pull request introduces a file called `twinkle-twinkle.ly`. This file is the notation of the melody from "Twinkle Twinkle Little Star". But, a few things are wrong. You'll notice that a note is wrong, and a rhythm is wrong - we'll fix the rhythm later. First, correct the note so it matches the traditional melody.

### :keyboard: Activity: Fix a note

1. [Edit the `twinkle-twinkle.ly` file on this branch]({{ editUrl }})
2. Identify and correct the note in the pattern
3. Save and commit your changes to this branch

I'll respond when I detect a new commit on this branch.

I wasn't able to find that you added the proper note!

I'm specifically looking for the following line:

```ly
  c8\mf c g' g
```

I'll respond when I detect a new commit on this branch.
# Rhythm with LilyPond

### Our project right now

We have created a version of the song in its current form, and [you can listen to it here](https://gitmusical.github.io/notating-twinkle/1-pitch).

Right now, the compiled piece would look like this:

![twinkle twinkle initial version](https://gitmusical.github.io/notating-twinkle/1-pitch.png)

You can also see and play the file on [LilyBin](http://lilybin.com/4v3lnh/1).

### Rhythm

In LilyPond, rhythm is dictated through symbols. As stated in [LilyPond's documentation](http://lilypond.org/doc/v2.18/Documentation/notation/writing-rhythms),

> **Durations** are designated by numbers and dots, and entered as their reciprocal values. For example, a quarter note is entered using a 4 (since it is a 1/4 note), and a half note is entered using a 2 (since it is a 1/2 note). For notes longer than a whole you must use the \longa (a double breve) and \breve commands. Durations as short as 128th notes may be specified. Shorter values are possible, but only as beamed notes.

### Rhythm in Twinkle Twinkle

The duration of each note is defined with a **number** in the **same block with the pitches**. For twinkle twinkle little star, the long version would look like:

```ly
{
  c8\mf c8 g'8 b8
  a8 a8 <g d>4
  f4 f4 e4 e4
  d4 d4 c2
}
```

If a pitch doesn't have a specific number (duration), it assumes the duration of the pitch before it. You may notice that there isn't a number after every letter (pitch)! In our example, we see:

```ly
{
  c8\mf c g' b
  a a <g d>4
  f4 f e e
  d d c2
}
```

## Step 2: Correct the rhythm

If you sing, play, or read this music as it currently is, you will notice that the harmonic rhythm changes in the second bar (the song slows down to half speed). Edit the rhythm to continue the notation pattern from the first measure.

### :keyboard: Activity: Fix a rhythm

1. [Edit the `twinkle-twinkle.ly` file on this branch]({{ editUrl }})
2. Identify and correct the rhythm in the pattern
3. Save and commit your changes to this branch

I'll respond when I detect a new commit on this branch.

I wasn't able to find that you added the proper rhythm!

I'm specifically looking for the following line:

```ly
  f8 f e e
  d d c4
```

I'll respond when I detect a new commit on this branch.
# Time signatures

### Our project right now

Great job! So far, you've edited pitches and rhythms.

We have created a version of the song in its current form, and [you can listen to it here](https://gitmusical.github.io/notating-twinkle/2-rhythm).

Right now, the compiled piece would look like this:

![twinkle twinkle initial version](https://gitmusical.github.io/notating-twinkle/2-rhythm.png)

You can also see and play the file on [LilyBin](http://lilybin.com/7jlknt/1).

### Time Signatures

Time signatures can be specified before a group of notes by `\time` followed by the time signature. (Ex: `\time 2/4 `).

The main block of notes in our piece currently look like:

```ly
\relative c' {
  c8\mf c g' b
  a a <g d>4
  f4 f e e
  d d c2
}
```

If we were to specify 2/4 time, we would add a line before the notes, but within the block, like this:

```ly
\relative c' {
  \time 2/4
  c8\mf c g' b
  a a <g d>4
  f4 f e e
  d d c2
}
```

See the difference?

## Step 3: Change the time signature

Right now, the time signature of this piece is not specified. Let's try out a change and edit it to specify a time signature of 2/4 time. _What do you think will happen to the bar lines?_ 🧐

### :keyboard: Activity: Change the time signature to 2/4 time

1. [Edit the `twinkle-twinkle.ly` file on this branch]({{ editUrl }})
2. Insert a line before the pitches start to declare a 2/4 time signature
3. Save and commit your changes to this branch

I'll respond when I detect a new commit on this branch.

I wasn't able to find that you added the proper time signature!

I'm specifically looking for the following line:

```ly
... {
  \time 2/4
  
  ...
}
```

Note: the ellipses (`...`) are just placeholders for areas that this section doesn't focus on. Do not copy and paste the ellipses into your code.

I'll respond when I detect a new commit on this branch.
# Chords with LilyPond

### Our project right now

Nice job with the time signature! What do you notice about the barlines?

We have created a version of the song in its current form, and [you can listen to it here](https://gitmusical.github.io/notating-twinkle/3-time-sig).

Right now, the compiled piece would look like this:

![twinkle twinkle initial version](https://gitmusical.github.io/notating-twinkle/3-time-sig.png)

You can also see and play the file on [LilyBin](http://lilybin.com/kcqg5i/1).

### Chords

You may have noticed so far that our example has many instances of only one note, but there is an example of a chord.

Single notes are notated by letters (or letters combined with numbers or other symbols) that are surrounded by spaces, like:

```ly
  c8\mf c g' b
```

Below, you can see that the notes `G` and `D` are grouped together by the bracket symbols, `<` and `>`:

```ly
  a a <g d>4
```

## Step 4: Create a chord

Let's add another chord to the last note of the piece!

### :keyboard: Activity: Create a chord on the last note with C and the G below it

1. [Edit the `twinkle-twinkle.ly` file on this branch]({{ editUrl }})
2. Edit the last note to be a chord with the notes `c` and `g`
3. Save and commit your changes to this branch

I'll respond when I detect a new commit on this branch.

I wasn't able to find that you added the proper chord!

I'm specifically looking for the following line:

```ly
  d d <c g>4
```

I'll respond when I detect a new commit on this branch.
# Key Signatures

### Our project right now

Nice work! We have created a version of the song in its current form, and [you can listen to it here](https://gitmusical.github.io/notating-twinkle/4-chord).

Right now, the compiled piece would look like this:

![twinkle twinkle initial version](https://gitmusical.github.io/notating-twinkle/4-chord.png)

You can also see and play the file on [LilyBin](http://lilybin.com/7z8zgj/1).

### Key signatures on LilyPond

Like with the time signature, the key signature is notated with `/key` followed by the signature, like `\key c \minor`. In a file, this would look like:

```ly
\relative c' {
  \time 4/4
  \key c \minor
  c8\mf c g' b
  a a <g d>4
  f4 f e e
  d d c2
}
```

## Step 5: Change the key

Let's add some drama and change the key to `c minor`.

### :keyboard: Activity: Change the key signature to C minor

1. [Edit the `twinkle-twinkle.ly` file on this branch]({{ editUrl }})
2. Add a line after the time signature to specify c minor as the key for this song
3. Save and commit your changes to this branch

I'll respond when I detect a new commit on this branch.

I wasn't able to find that you added the proper key signature!

I'm specifically looking for the following line:

```ly
... {
  \key c \minor
  
  ...
}
```

Note: the ellipses (`...`) are just placeholders for areas that this section doesn't focus on. Do not copy and paste the ellipses into your code.

I'll respond when I detect a new commit on this branch.
# Accidentals

### Our project right now

We have created a version of the song in its current form, and [you can listen to it here](https://gitmusical.github.io/notating-twinkle/5-key-sig).

Right now, the compiled piece would look like this:

![twinkle twinkle initial version](https://gitmusical.github.io/notating-twinkle/5-key-sig.png)

You can also see and play the file on [LilyBin](http://lilybin.com/pxpm7v/1).

### Accidentals on LilyPond

If you chose to visualize the changes as music notation after you changed the key signature, you may have noticed that the notes affected were automatically notated as naturals.

To change how these notes are visualized, we will add the notation for flats by the notes that we want to actually be flat.

**Flats** are notated with `es` after a note, like `ces` for c♭.

**Sharps** are notated with `is` after a note, like `cis` for c♯.

Naturals (♮) are always assumed.

## Step 6: Add an accidental

Let's make the _second_ `a` in the piece a _flat_.

### :keyboard: Activity: Change the key signature to C minor

1. [Edit the `twinkle-twinkle.ly` file on this branch]({{ editUrl }})
2. Edit the second occurrence of the pitch `a` to be a flat
3. Save and commit your changes to this branch

I'll respond when I detect a new commit on this branch.

I wasn't able to find that you added the accidentals!

I'm specifically looking for the following line:

```ly
  a aes <g d>4
```

I'll respond when I detect a new commit on this branch.
# Dynamics

### Our project right now

We have created a version of the song in its current form, and [you can listen to it here](https://gitmusical.github.io/notating-twinkle/6-accidental).

Right now, the compiled piece would look like this:

![twinkle twinkle initial version](https://gitmusical.github.io/notating-twinkle/6-accidental.png)

You can also see and play the file on [LilyBin](http://lilybin.com/xvd83h/1).

### Dynamics on LilyPond

As you may have noticed, musical notation is typically associated with the pitch. Dynamics are included directly after a pitch. You can see this already in our song.

```ly
  c8\mf c g' b
```

As seen on [LilyPond's documentation](http://lilypond.org/doc/v2.18/Documentation/notation/expressive-marks-attached-to-notes), the available dynamic marks are `\ppppp`, `\pppp`, `\ppp`, `\pp`, `\p`, `\mp`, `\mf`, `\f`, `\ff`, `\fff`, `\ffff`, `\fffff`, `\fp`, `\sf`, `\sff`, `\sp`, `\spp`, `\sfz`, and `\rfz`.

## Step 6: Change the dynamics

### :keyboard: Activity: Change the dynamic marking from `mf` to `p`

1. [Edit the `twinkle-twinkle.ly` file on this branch]({{ editUrl }})
2. Add a dynamic marking of _piano_, `\p`, on the first `f` note
3. Save and commit your changes to this branch

I'll respond when I detect a new commit on this branch.

I wasn't able to find that you added the accidentals!

I'm specifically looking for the following line:

```ly
  f8\p f e e
```

I'll respond when I detect a new commit on this branch.
# Final steps

### Our project right now

We have created a version of the song in its current form, and [you can listen to it here](https://gitmusical.github.io/notating-twinkle/7-dynamic).

Right now, the compiled piece would look like this:

![twinkle twinkle initial version](https://gitmusical.github.io/notating-twinkle/7-dynamic.png)

You can also see and play the file on [LilyBin](http://lilybin.com/l43o6t/1).

## Step 8: Approve and merge

You've done it! Go ahead and please approve, then merge this pull request.

### :keyboard: Activity: Approve and merge

1. Approve this pull request
2. Merge this pull request
3. Delete the branch `twinkle-twinkle`

I'll respond when you merge this pull request.

# What's next?

In this pull request, you'll find the start of a new song. What music will you write next?
Good job, @{{ user.username }}! You're done! We opened [a pull request]({{ prLink }}) with your final _notes_.

![congratulations](https://octodex.github.com/images/welcometocat.png)

## What went well

In this course, you learned how to notate music with LilyPond. You
 learned how to:

1. Set pitches: `c c g g`
2. Change rhythm: `c8 g4`
3. Set time signatures: `\time 2/4`
4. Create chords: `<g d>`
5. Set key signatures: `\key c \minor`
6. Add accidentals: `a aes`
7. Insert dynamic markings `c\mf`

## What's next?

- You can learn more about LilyPond at <http://lilypond.org/>
- For a more thorough introduction, look at the [Learning Manual](http://lilypond.org/doc/v2.18/Documentation/learning/index.html).
- For over 2000 free scores in LilyPond format, check out [Mutopia](https://www.mutopiaproject.org/).
- Play with LilyPad live on [LilyBin](http://lilybin.com/).

