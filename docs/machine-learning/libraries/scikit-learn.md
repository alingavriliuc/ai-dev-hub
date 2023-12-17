---
title: Scikit-Learn
tags:
  - Machine Learning
  - Scikit-Learn
---

# Scikit-learn

[Documentation](https://scikit-learn.org/stable/)

## What is Scikit-learn?

Scikit-learn (sklearn) is a popular open-source machine learning library for Python. Known for its simplicity and efficiency, it is widely used for data mining and data analysis.

Scikit-learn provides a range of supervised and unsupervised learning algorithms via a consistent interface. It is built on NumPy, SciPy, and matplotlib, offering various tools for model fitting, data preprocessing, model selection, and evaluation, as well as many other utilities.

## Installation

```
pip install -U scikit-learn
```

## Key Features

- **Versatile**: Offers a wide range of algorithms for classification, regression, clustering, and dimensionality reduction.
- **Accessible**: Designed to be accessible, with a consistent and simple API.
- **Efficient**: Built on top of NumPy and SciPy, it is highly efficient.
- **Well Documented**: Extensive documentation and examples are available.
- **Community-Driven**: Developed and maintained by a community of contributors.

## Common Use Cases

### 1. Classification
Used for identifying which category an object belongs to. Applications include spam detection, image recognition, and customer segmentation.

```python
from sklearn.ensemble import RandomForestClassifier
# example of RandomForestClassifier
```

### 2. Regression
Used for predicting continuous values like house prices or temperatures.

```python
from sklearn.linear_model import LinearRegression
# example of LinearRegression
```

### 3. Clustering
Used for grouping similar entities together, such as grouping customers based on purchasing behavior.

```python
from sklearn.cluster import KMeans
# example of KMeans clustering
```

### 4. Dimensionality Reduction
Used to reduce the number of features in a dataset, which can be helpful for visualization or data preprocessing.

```python
from sklearn.decomposition import PCA
# example of PCA for dimensionality reduction
```