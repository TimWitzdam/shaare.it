---
title: "ValueError: data and label must have the same length"
description: "How to fix the ValueError in Matplotlib when data and label lengths do not match in pie charts."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: data and label must have the same length

This error occurs when you are creating a pie chart using Matplotlib's `plt.pie()` function, and the number of labels you provide does not match the number of data points (or wedges) for the pie chart.

```bash
$ python -c "import matplotlib.pyplot as plt; plt.pie([10, 20, 30], labels=['A', 'B']); plt.show()"
Traceback (most recent call last):
  ...
ValueError: `data` and `label` must have the same length
```

### Why this happens

Matplotlib needs to associate each slice of the pie chart with a corresponding label. If the lengths of the `data` and `labels` arrays are different, it doesn't know how to map them, leading to the `ValueError`.

### Fix

Ensure that the number of elements in your `labels` list is equal to the number of elements in the data list you are plotting.

#### Wrong code

In this example, there are 3 data points but only 2 labels.

```python
import matplotlib.pyplot as plt

data = [10, 20, 30]
labels = ['Slice A', 'Slice B']

plt.pie(data, labels=labels)
plt.title('Pie Chart')
plt.show()
```

#### Fixed code

By adding a third label, the lengths match, and the chart can be rendered correctly.

```python
import matplotlib.pyplot as plt

data = [10, 20, 30]
labels = ['Slice A', 'Slice B', 'Slice C']

plt.pie(data, labels=labels)
plt.title('Corrected Pie Chart')
plt.show()
```
