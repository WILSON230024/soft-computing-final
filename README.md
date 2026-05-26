# Soft Computing Final Project

Final project repository for our Soft Computing group. This project combines an AI training workflow and a web application for image sentiment analysis.

## Group Profile

- Francisco Gilbert Sondakh - 140810230004
- Wilson Angelie Tan - 140810230024
- Theophilus Samuel Ghozali - 140810230054

## What We Do

We build an image sentiment classification system that predicts whether an image belongs to:

- Negative
- Neutral
- Positive

The AI side uses a hybrid approach:

- CNN for feature learning from images
- Genetic Algorithm for hyperparameter optimization
- Fuzzy Inference System for the final classification stage

The repository is split into two main parts:

- `ai_train/` for model training, notebooks, dataset files, and saved artifacts
- `web/` for the Next.js web application

## Requirements

Before running the project, make sure you have:

- Python `3.12+`
- `uv` for Python dependency management
- Node.js
- `pnpm`

## Run AI Training With `uv`

Move into the AI training folder:

```powershell
cd ai_train
```

If `uv` is not installed yet, install it:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Install the Python dependencies:

```powershell
uv sync
```

Open the training notebook with `uv`:

```powershell
uv run jupyter lab notebook/main.ipynb
```

If you prefer the classic notebook UI:

```powershell
uv run jupyter notebook notebook/main.ipynb
```

Notes:

- Training data is stored in `ai_train/dataset/`
- Labels are read from the filename suffix
- Use `*_neg.*` for negative
- Use `*_neutral.*` for neutral
- Use `*_pos.*` for positive
- Saved model artifacts are stored in `ai_train/artifacts/`

## Run the Web App

Move into the web folder:

```powershell
cd web
```

Install dependencies:

```powershell
pnpm install
```

Start the development server:

```powershell
pnpm dev
```

Open the app in your browser:

```text
http://localhost:3000
```

## Helpful Commands

AI training:

```powershell
cd ai_train
uv sync
uv run jupyter lab notebook/main.ipynb
```

Web app:

```powershell
cd web
pnpm install
pnpm dev
```