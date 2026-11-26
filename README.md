# Famous Last Words at 1 Percent

[![Famous Last Words at 1 Percent](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/competitions/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![Rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/muhamadyusufseptian6-lab/makefun-u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/rank.svg)](https://make.fun/competitions/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![Reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/muhamadyusufseptian6-lab/makefun-u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/reward.svg)](https://make.fun/competitions/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

A make.fun entry for **Famous Last Words at 1 Percent**: one line of last words a phone says as its battery hits 1 percent. Not a caption, not a slogan — the phone itself, out of time, with one final confession.

## The entry

One line, 148 characters — the phone's last words before the screen goes dark:

> I survived 412 drops, one toilet, and your 2 a.m. doomscrolling — but this last percent? I'm taking your 3 a.m. search history to the grave with me.

Four hundred and twelve drops, one toilet, and years of loyal service — and what does it choose to do with its dying breath? Blackmail. Fair enough.

## How it works

`main.ts` (Node 22, standard library only, fully deterministic) writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`. No network, no randomness, no secrets — the same run always writes the same 148 characters. The script finds the repo directory from its own location, not from wherever you happen to run it, and it never deletes or recreates the output directory; it just makes sure the folder exists and writes the file.

## Run it

You only need Node 22 — no dependencies to install, nothing to configure:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

You should see the 148-character line above, exactly as written. If `MAKEFUN_OUTPUT_DIR` is not set, it falls back to `/output`.

---

Join make.fun with my referral code: **515temp1**
